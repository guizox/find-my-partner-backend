import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiPublicController } from 'src/api/swagger/controller/api-public-controller.decorator';
import { Partner } from './partner.entity';
import { PartnerCreationRequest } from './partner-creation.request'
import { ApiCreationEndpoint } from 'src/api/swagger/endpoint/api-creation-endpoint.decorator';
import { ApiBodyType } from 'src/api/swagger/endpoint/api-body.type';
import { ApiResponseType } from 'src/api/swagger/endpoint/api-response.type';
import { NumberParam } from 'src/api/controller/param/number-param.decorator';
import { PartnerService } from './partner.service';


@ApiPublicController('partner')
@Controller('partner')
export class PartnerController {
	constructor(private readonly partnerService: PartnerService) { }

	@Get(':userId')
	getPartners(@NumberParam('userId') userId: number): Promise<Partner[]> {
		return this.partnerService.getPartners(userId)
	}

	@ApiCreationEndpoint(
		'Create a partner',
		ApiBodyType(PartnerCreationRequest),
		ApiResponseType(Partner),
	)
	@Post(':userId')
	createPartner(
		@NumberParam('userId') userId: number,
		@Body()
		request: PartnerCreationRequest,
	): Promise<Partner> {
		console.log(userId);
		console.log(request);
		return this.partnerService.createPartner(request)
	}
}
