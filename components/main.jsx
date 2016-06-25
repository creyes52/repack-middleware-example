import MainComponent from './MainComponent.jsx'
import { render } from 'react-dom'

var doRender = function() {
	render(
		<MainComponent/>,
		document.getElementById("main")
	)
}
doRender();

if ( module.hot ) {
	module.hot.accept(function() {
		doRender();
	});
}
