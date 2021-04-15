import { setCookie } from "./cookies.js"

const mainContainer = document.querySelector(".main_container")
const cookiesPolicyContainer = document.querySelector(".cookies_policy_container")
const vendorsList = document.querySelector(".GDPR_vendors_list")
const GDPRAcceptBtn = document.querySelector(".GDPR_accept_btn")
const GDPRRejectBtn = document.querySelector(".GDPR_reject_btn")

setCookie()

const getData = async () => {
	const res = await fetch("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json")
	const data = await res.json()
	const vendors = [...Object.values(data.vendors)]
	vendors.forEach(vendor => {
		const listElement = document.createElement("li")
		listElement.innerHTML = `
        <input type="checkbox" checked id="${vendor.name}" /><label for="${vendor.name}">${vendor.name}</label>
        <h5><a href="${vendor.policyUrl}">${vendor.policyUrl}</a></h5>`
		vendorsList.append(listElement)
		cookiesPolicyContainer.style.display = "block"
	})
}

getData()

GDPRAcceptBtn.addEventListener("click", () => {
	mainContainer.classList.remove("modal_open")
	cookiesPolicyContainer.style.display = "none"
})

GDPRRejectBtn.addEventListener("click", () => {
	mainContainer.classList.remove("modal_open")
	cookiesPolicyContainer.style.display = "none"
})
