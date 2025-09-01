import LinkAccountForm from '@/components/forms/LinkAccountForm';

export default function LinkAccount() {
	return (
		<div>
			<LinkAccountForm applicationId={process.env.TELLER_APPLICATION_ID!} />
		</div>
	);
}
