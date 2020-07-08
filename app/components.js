Vue.component('talent-builder', {
	data: {
		spelldata: {},
		spells: [],

		remainingAE: 60,
		remainingTE: 51
	},
	created: function () {
		fetch('data/spells.json').then(spells => {
			this.spelldata.spells = spells;
			this.formatSpellData();
		});
		fetch('data/spelltags.json').then(tags => {
			this.spelldata.tags = tags;
			this.formatSpellData();
		})
	},
	methods: {
		formatSpellData: function () {

		},
		getSpells: function () {
			return this.spells;
		},
		selectSpell: function (spell) {

		},
		unselectSpell: function (spell) {

		}
	},
	provide: function () {
		return {
			getSpells: this.getSpells,
			selectSpell: this.selectSpell,
			unselectSpell: this.unselectSpell
		};
	},
	template: '<div class="talent-builder"><div>Talent Builder</div><slot></slot></div>'
});

Vue.component('class-ability-list', {

});

Vue.component('class-ability-tree', {

});

Vue.component('filtered-ability-list', {
	props: {
		filter: String,

	},
	computed: {

	},
	watch: {
		filter: function (val) {

		}
	}
});

Vue.component('ability-button', {
	props: {
		spell: Object,

	},
	template: '<div class="ability-button"><slot></slot></div>'
});

