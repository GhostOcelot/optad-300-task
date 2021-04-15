const cookiesPolicy = document.querySelector(".cookies_policy")
const vendorsList = document.querySelector(".GDPR_vendors_list")

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
	})
}

getData()
