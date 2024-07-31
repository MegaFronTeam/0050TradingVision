window.setTimeout(function () {
	(function (d, w, src, r, c) {
		var rid = r.toString().substr(2);
		var n = d.getElementsByTagName("script")[0],
			s = d.createElement("script"),
			f = function () {
				n.parentNode.insertBefore(s, n);
			};
		var p = d.location.protocol;
		if (p != "http:" && p != "https:" && src.indexOf("//") == 0) {
			src = "http:" + src;
		}
		s.type = "text/javascript";
		s.async = true;
		s.src = src + (src.indexOf("?") == -1 ? "?" : "&") + "r=" + rid;
		if (w.opera == "[object Opera]") {
			d.addEventListener("DOMContentLoaded", f, false);
		} else {
			f();
		}
		if (c) {
			s.addEventListener(
				"load",
				function (e) {
					c(null, e);
				},
				false
			);
		}
	})(
		document,
		window,
		"//info-dvd.ru/bbm/js/bbm_form.js",
		Math.random(),
		function () {
			window["bf349"] = new BbmFormMng({
				id: "bf349",
				langs: {
					errors: {
						email_pattern: "Введите корректный адрес электронной почты.",
						alphanumeric_pattern:
							"Может содержать только маленькие английские буквы и цифры",
						phone_pattern: "Некорректный формат телефона",
						zip_pattern: "Некорректный формат почтового индекса",
						empty_field: "Это поле необходимо заполнить.",
						min_limit: "Укажите значение не меньше ",
						oferta_warn: "Необходимо согласиться с условиями публичной оферты!",
					},
					processing: "Обработка...",
				},
				rules: {
					kupon: ["alphanumeric"],
					phone: ["phone", "required"],
					email: ["required", "email"],
					fullname: ["required"],
				},
				phone_verification: false,
			});
		}
	);
}, 0);
