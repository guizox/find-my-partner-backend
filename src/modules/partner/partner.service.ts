import { Injectable, BadRequestException } from '@nestjs/common';
import { Partner } from './partner.entity';
import { PartnerCreationRequest } from './partner-creation.request';
import { PartnerRepository } from './partner.repository';
import { AddressRepository } from '../address/address.repository';
import { response } from 'express';

const betterReadingLog = (str: any) => {
	console.log('***********************************')
	console.log(JSON.stringify(str))
	console.log('***********************************')
}


@Injectable()
export class PartnerService {

	constructor(
		private readonly partnerRepository: PartnerRepository,
		private readonly addressRepository: AddressRepository
	) { }

	createPartner = async (partner: PartnerCreationRequest): Promise<Partner> => {
		let finalPartner;
		const { address } = partner;

		await this.partnerRepository.runInTransaction(async manager => {
			const newPartner = await this.partnerRepository.create({ email: partner.email, name: partner.name, telephone: partner.telephone }, 'system', manager)
			const newAddress = await this.addressRepository.create({
				city: address.city,
				street: address.street,
				latitude: address.latitude,
				longitude: address.longitude,
				neighborhood: address.neighborhood,
				number: address.number,
				state: address.state,
				zipcode: address.zipcode,
				partnerId: newPartner.id
			}, 'system', manager);
			finalPartner = {
				...newPartner,
				address: {
					...newAddress
				}
			}
		});

		if (!finalPartner) {
			throw new BadRequestException('Error to create partner')
		}

		return finalPartner

	}

	getPartners = async (id: number): Promise<Partner[]> => {
		const partners = await this.partnerRepository.find({})
		const response = [];
		for (let partner of partners) {
			const address = await this.addressRepository.findOne({ where: { partnerId: partner } })
			partner.address = address;
			response.push(partner);
		}
		return response;
	}

}
