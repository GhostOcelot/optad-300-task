import { setCookie } from './cookies.js';

const mainContainer = document.querySelector('.main_container');
const cookiesPolicyContainer = document.querySelector('.cookies_policy_container');
const vendorsList = document.querySelector('.GDPR_vendors_list');
const GDPRAcceptBtn = document.querySelector('.GDPR_accept_btn');
const GDPRRejectBtn = document.querySelector('.GDPR_reject_btn');

export const getData = () => {
	return fetch('https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json')
		.then(res => res.json())
		.then(data => {
			const vendors = [...Object.values(data.vendors)];
			return vendors;
		});
};

const createVendorsList = vendors => {
	vendors.forEach(vendor => {
		const listElement = document.createElement('li');
		listElement.innerHTML = `
		<input type="checkbox" checked id="${vendor.name}" />
		<label for="${vendor.name}">${vendor.name}</label>
		<h5><a href="${vendor.policyUrl}">${vendor.policyUrl}</a></h5>
		`;
		vendorsList.append(listElement);
		cookiesPolicyContainer.style.display = 'block';
	});
};

const closeModal = () => {
	mainContainer.classList.remove('modal_open');
	cookiesPolicyContainer.style.display = 'none';
};

const init = () => {
	if (document.cookie.indexOf('accepted=') === -1) {
		mainContainer.classList.add('modal_open');
		getData()
			.then(vendors => createVendorsList(vendors))
			.catch(error => console.error(error));
	}

	GDPRAcceptBtn.addEventListener('click', () => {
		setCookie();
		closeModal();
	});

	GDPRRejectBtn.addEventListener('click', closeModal);
};

init();
