
export const phoneInputs = () => {

const inputs = document.querySelectorAll(".form__phone input");


inputs.forEach(input=>{
    window.intlTelInput(input, {
				initialCountry: "auto",
                showSelectedDialCode: true,
				geoIpLookup: callback => {
					fetch("https://ipapi.co/json")
						.then(res => res.json())
						.then(data => callback(data.country_code))
						.catch(() => callback("us"));
				},
                
				utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",

			
			});
})
			
}