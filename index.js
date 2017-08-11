/*



*/

const BossId = [470, 1000]; // MM Stage

const BossActions = {
		1171654722: {msg: 'Fire Breath'},
		1171655826: {msg: 'Target'},
		1171653917: {msg: 'Spread'},
		1171653919: {msg: 'Gather'},
		1171655820: {msg: 'AoE'},
		1171655811: {msg: 'IN'},
		1171655810: {msg: 'OUT'},
		1171655821: {msg: 'Shield'},
		1171655809: {msg: 'Break Shield'},
		1171655816: {msg: 'Puddle Away'},

		1171653609: {msg: '01'},
		1171653610: {msg: '02'},
		1171653612: {msg: '03'},
//		1171653709: {msg: '04'},
//		1171653710: {msg: '05'},
		1171653711: {msg: '06'},
//		1171653713: {msg: '07'},
//		1171653714: {msg: '08'},
//		1171653716: {msg: '09'},
//		1171653717: {msg: '10'},
//		1171653728: {msg: '11'},
//		1171653758: {msg: '12'},
//		1171653809: {msg: '13'},
//		1171653909: {msg: '14'},
//		1171653911: {msg: '15'},
//		1171653912: {msg: '16'},
//		1171653913: {msg: '17'},
//		1171653915: {msg: '18'},
//		1171654709: {msg: '21'},
//		1171654710: {msg: '22'},
//		1171654713: {msg: '23'},
//		1171654715: {msg: '24'},
//		1171654716: {msg: '25'},
//		1171654758: {msg: '27'},
//		1171655709: {msg: '28'},
//		1171655710: {msg: '29'},
//		1171655711: {msg: '30'},
//		1171655714: {msg: '31'},
//		1171655824: {msg: '38'},
//		1171655827: {msg: '40'},
//		1171657608: {msg: '41'},
//		1171657609: {msg: '42'},
		1207895117: {msg: '43'},
		1207895118: {msg: '44'},
		1207895119: {msg: '45'},
		1214970454: {msg: '46'},
					};

module.exports = function MMGuide(dispatch) {

let boss = null;
dispatch.hook('S_BOSS_GAGE_INFO', 2, (event) => {
	if (event.huntingZoneId === BossId[0] && event.templateId === BossId[1])
		{
			boss = event;
		}
	})

dispatch.hook('S_ACTION_STAGE', 1, (event) => {
	
	if(!boss) return;
	
if (boss.id - event.source == 0) {
		if (BossActions[event.skill]) {
			notify(BossActions[event.skill].msg);
			}
		}
	})


	function notify(msg) {
		dispatch.toClient('S_DUNGEON_EVENT_MESSAGE', 1, {
            unk1: 42, // 42 Blue Shiny Text, 31 Normal Orange Text, 2 Normal Text any color?
            unk2: 0,
            unk3: 27, // 27
            message: msg
        })
	}
	
}