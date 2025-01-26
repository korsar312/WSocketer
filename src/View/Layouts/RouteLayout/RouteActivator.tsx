import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseCases from "Logic/Core/UseCases/UseCases";

export const RouteActivator = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	useEffect(() => {
		UseCases.interactor("router", "setCurrentPage", pathname);
	}, [pathname]);

	useEffect(() => {
		UseCases.interactor("router", "setNavigateFunc", navigate);
	}, []);

	return null;
};
