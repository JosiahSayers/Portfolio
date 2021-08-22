import type { NowRequest, NowResponse } from '@vercel/node';
import MailerSend, { Recipient, EmailParams } from 'mailersend';

export default (req: NowRequest, res: NowResponse): unknown => {
	if (req.method === 'POST') {
		if (!req.body.name) {
			return res.status(400).json({ msg: 'name must be provided on the body' });
		}
		if (!req.body.email) {
			return res.status(400).json({ msg: 'email must be provided on the body' });
		}
		if (!req.body.message) {
			return res.status(400).json({ msg: 'message must be provided on the body' });
		}
		if (!isOriginValid(req.headers.origin)) {
			return res.status(401).send('');
		}

		const mailersend = new MailerSend({
			api_key: process.env.MAILERSEND_API_KEY
		});
		const recipients = [new Recipient(process.env.TO_EMAIL, 'Josiah Sayers')];
		const emailParams = new EmailParams()
			.setRecipients(recipients)
			.setTemplateId(process.env.TEMPLATE_ID)
			.setVariables([
				{
					email: process.env.TO_EMAIL,
					substitutions: [
						{
							var: 'name',
							value: req.body.name
						},
						{
							var: 'email',
							value: req.body.email
						},
						{
							var: 'message',
							value: req.body.message
						}
					]
				}
			]);

		(<Promise<any>>mailersend.send(emailParams)).then(
			() => {
				return res.status(200).send('');
			},
			(err) => {
				return res.status(500).json(err);
			}
		);
	} else {
		return res.status(404).send('');
	}
};

function isOriginValid(origin: string): boolean {
	const vercelReg = new RegExp(`(https:\/\/)?(www\.)?${process.env.VERCEL_URL}`);
	const prodReg = /(https: \/\/)?(www\.)?(next\.)?josiahsayers\.com/;
	return vercelReg.test(origin) || prodReg.test(origin);
}
