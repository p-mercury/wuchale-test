export function getUserStatusName(t: number): string {
	switch (t) {
		case 1:
			return /* @wc-include */ "Deleted";
		case 2:
			return /* @wc-include */ "Invited";
		case 3:
			return /* @wc-include */ "Active";
		case 4:
			return /* @wc-include */ "Deactivated";
		default:
			return /* @wc-include */ "Unknown";
	}
}
