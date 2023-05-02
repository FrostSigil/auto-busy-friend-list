module.exports = function OnlineBusy(mod) {

	mod.dispatch.addDefinition("C_CHANGE_MY_STATE", 1, [(
		["status", "uint32"]
	)]);

	mod.game.on("enter_game", () => {
		mod.send('C_CHANGE_MY_STATE', 1, { status: 1 });
	});
};