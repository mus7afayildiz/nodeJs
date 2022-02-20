import screenfull from 'screenfull';

function FullScreen(){
const element = document.getElementById('target');

document.getElementById('button').addEventListener('click', () => {
	if (screenfull.isEnabled) {
		screenfull.request(element);
	}
});
};
export default FullScreen;