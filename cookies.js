const createExpiryDateForCookie = () => {
	const cookieExpiryDate = new Date();
	const expireDay = cookieExpiryDate.getDate();
	cookieExpiryDate.setDate(expireDay + 1);
	return cookieExpiryDate;
};

export const setCookie = async () => {
	let ids = '- ';

	Array.from(document.querySelectorAll('.GDPR_vendors_list input:checked'))
		.map(item => item.attributes[1].value)
		.forEach(item => {
			ids += `${item} - `;
		});

	document.cookie = `accepted=${ids}; expires=${createExpiryDateForCookie()}; secure`;
};
