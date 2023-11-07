import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { locales } from './locales';

export default function Locales() {
	let defaultLang = 'en';
	const getText = (screen) => {
		const settings = useSelector((state) => state.settings);
		let language = settings.language ? settings.language : defaultLang;
		if(screen == 'SelectLanguage'){
			return locales[screen];
		} else {
			return locales[screen][language];
		}
	}
  return { getText }
};
