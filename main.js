import { setCookie } from './cookies.js';

const mainContainer = document.querySelector('.main_container');
const cookiesPolicyContainer = document.querySelector('.cookies_policy_container');
const vendorsList = document.querySelector('.GDPR_vendors_list');
const GDPRAcceptBtn = document.querySelector('.GDPR_accept_btn');
const GDPRRejectBtn = document.querySelector('.GDPR_reject_btn');
const GDPRWarning = document.querySelector('.GDPR_warning');

export const getData = () => {
	return fetch('https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json')
		.then(res => res.json())
		.then(data => {
			const vendors = [...Object.values(data.vendors)];
			return vendors.slice(0, 10);
		})
		.catch(error => console.log(error));
};

const createVendorsList = vendors => {
	vendors.forEach(vendor => {
		const listElement = document.createElement('li');
		listElement.innerHTML = `
		<input type="checkbox" id="${vendor.name}" />
		<label for="${vendor.name}">${vendor.name}</label>
		<h5><a href="${vendor.policyUrl}">${vendor.policyUrl}</a></h5>
		`;
		vendorsList.append(listElement);
		cookiesPolicyContainer.classList.remove('hidden');
	});
};

const closeModal = () => {
	mainContainer.classList.remove('modal_open');
	cookiesPolicyContainer.classList.add('hidden');
};

const init = () => {
	if (document.cookie.indexOf('accepted') === -1) {
		mainContainer.classList.add('modal_open');
		getData()
			.then(vendors => createVendorsList(vendors))
			.catch(error => console.log(error));
	}

	GDPRAcceptBtn.addEventListener('click', () => {
		if (document.querySelectorAll('.GDPR_vendors_list input:checked').length) {
			setCookie();
			closeModal();
		} else {
			GDPRWarning.classList.remove('hidden');
		}
	});

	GDPRRejectBtn.addEventListener('click', () => {
		closeModal();
	});
};

init();
