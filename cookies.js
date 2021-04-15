const createExpiryDateForCookie = () => {
	const cookieExpiryDate = new Date()
	const expireDay = cookieExpiryDate.getDate()
	cookieExpiryDate.setDate(expireDay + 1)
	return cookieExpiryDate
}

export const setCookie = async () => {
	const res = await fetch("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json")
	const data = await res.json()
	let cookieValue = ""
	const vendors = [...Object.values(data.vendors)]
	vendors.forEach(vendor => {
		cookieValue += `${vendor.name.trim()};`
	})

	const cookieExpiryDate = createExpiryDateForCookie()
	console.log(cookieValue)
	// document.cookie = `accepted=${cookieValue}; expires=${cookieExpiryDate}`
}
