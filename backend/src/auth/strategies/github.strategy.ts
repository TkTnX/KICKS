import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import axios from 'axios';
import { Profile, Strategy } from 'passport-github';
@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.getOrThrow('GITHUB_CLIENT_ID'),
      clientSecret: configService.getOrThrow('GITHUB_CLIENT_SECRET'),
      callbackURL: configService.getOrThrow('GITHUB_CALLBACK_URL'),
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: Profile) {
    let email = profile.emails?.[0]?.value;

    if (!email) {
      const { data } = await axios.get('https://api.github.com/user/emails', {
        headers: {
          Authorization: `token ${accessToken}`,
          'User-Agent': 'NestJS-App',
        },
      });
      const primary = data.find((e) => e.primary && e.verified);
      if (primary) {
        email = primary.email;
      }
      return {
        id: profile.id,
        username: profile.username,
        displayName: profile.displayName,
        email,
        avatar: profile.photos?.[0]?.value,
        provider: profile.provider,
        profileUrl: profile.profileUrl,
      };
    }
  }
}
