import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UseCases from "Logic/Core/UseCases/UseCases";

export const RouteActivator = () => {
	const navigate = useNavigate();
	const location = useLocation;

	useEffect(() => {
		UseCases.interactor("router", "setNavigateFunc", navigate);
		UseCases.interactor("router", "setLocation", location);
	}, []);

	return null;
};
