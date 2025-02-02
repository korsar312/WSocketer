import { FC } from "react";
import Model from "View/Components/5.Widget/WidgetMessageControl/WidgetMessageControl.model";
import View from "View/Components/5.Widget/WidgetMessageControl/Layout/WidgetMessageControl_Public";
import { observer } from "mobx-react";

export interface IComponent {
	isEditable?: boolean;
	isMin?: boolean;
}

const Index: FC<IComponent> = (props) => {
	const model = Model(props);
	return <View {...model} />;
};

export default observer(Index);
