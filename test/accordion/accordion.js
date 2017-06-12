var suite = require('rgaa-test-suite');


/**
 *
 */
function accordionFactory(options) {
	var $accordion = $(`
		<uib-accordion close-others="whateverYouWant"></uib-accordion>
	`);

	options.panels.forEach((panel) => {
		$(`
			<div uib-accordion-group class="panel-default" heading="${panel.title}" is-open="${panel.selected}">
				${panel.content}
			</div>
		`).appendTo($accordion);
	})


	angular.module("myApplication", ['rgaaAngularBootstrap']);
	angular.bootstrap($accordion, ["myApplication"]);

	return $accordion[0];
}


/**
 *
 */
describe(
	'Angular Bootstrap test',
	suite.accordion(accordionFactory)
);
