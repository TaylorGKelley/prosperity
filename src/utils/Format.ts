class Format {
	public static price(price: number | bigint): string {
		const formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			trailingZeroDisplay: 'stripIfInteger',
		});

		return formatter.format(price);
	}

	public static date(date: Date | number): string {
		return new Date(date).toISOString();

		const formatter = new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'short',
			day: '2-digit',
			// dateStyle: 'medium',
		});

		return formatter.format(date);
	}
}

export default Format;
