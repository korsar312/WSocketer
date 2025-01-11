class VariablesVars {
	private _timeFastTransition = 0.25;

	public get timeFastTransition() {
		return this._timeFastTransition + "s";
	}

	public transition = "0.5s ease-in-out";
	public fastTransition = `${this.timeFastTransition} ease-in-out`;

	public radiusStandard = 16;
}

const Variables = new VariablesVars();
export default Variables;
