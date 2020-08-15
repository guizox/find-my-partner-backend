import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export function AuthenticateUser() {
  return UseGuards(AuthGuard());
}
