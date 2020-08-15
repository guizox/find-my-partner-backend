import { applyDecorators, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiCreatedResponse } from '@nestjs/swagger';

export const ApiCreationEndpoint = (
  operationDescription: string,
  body: {
    isArray: boolean;
    type: Function;
  },
  response: {
    isArray: boolean;
    type: Function;
  },
  ...apiParams: MethodDecorator[]
) => {
  const decoratorsToApply = [
    ApiOperation({
      description: operationDescription,
    }),

    HttpCode(201),
  ];

  if (!!body)
    decoratorsToApply.push(
      ApiBody({
        type: body.type,
        isArray: body.isArray,
        required: true,
      }),
    );

  if (!!response)
    decoratorsToApply.push(
      ApiCreatedResponse({
        type: response.type,
        isArray: response.isArray,
      }),
    );

  if (!!apiParams && apiParams.length > 0) decoratorsToApply.push(...apiParams);

  return applyDecorators(...decoratorsToApply);
};
