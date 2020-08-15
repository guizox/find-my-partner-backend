import { applyDecorators, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiBody, ApiOkResponse } from '@nestjs/swagger';

export const ApiNoCreationPostEndpoint = (
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
    HttpCode(200),
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
      ApiOkResponse({
        type: response.type,
        isArray: response.isArray,
      }),
    );

  if (!!apiParams && apiParams.length > 0) decoratorsToApply.push(...apiParams);

  return applyDecorators(...decoratorsToApply);
};
