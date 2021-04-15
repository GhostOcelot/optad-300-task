import { getData } from './main.js';

const createExpiryDateForCookie = () => {
	const cookieExpiryDate = new Date();
	const expireDay = cookieExpiryDate.getDate();
	cookieExpiryDate.setDate(expireDay + 1);
	return cookieExpiryDate;
};

export const setCookie = async () => {
	let cookieValue = '';
	getData()
		.then(vendors => {
			vendors.forEach(vendor => {
				cookieValue += `${vendor.name.trim()}-`;
			});
			const cookieExpiryDate = createExpiryDateForCookie();
			document.cookie = `accepted=${cookieValue};expires=${cookieExpiryDate};secure=true`;
		})
		.catch(error => console.error(error));
};
