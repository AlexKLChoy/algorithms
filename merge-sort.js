function main() {
	let dataSet = [10,9,8,7,6,5,4,3,2,1];
	mergeSort(dataSet);
}
main();

function mergeSort(dataSet) {
	console.log("Input Data Set:", dataSet);
	var sortedDataSet = [];
	if(dataSet.length > 1) {
		let median = Math.floor(dataSet.length / 2);
		let dataSetPt1 = dataSet.slice(0,median);
		let dataSetPt2 = dataSet.slice(median, dataSet.length);
		var sortedDataSetPt1 = mergeSort(dataSetPt1);
		var sortedDataSetPt2 = mergeSort(dataSetPt2);
		//Sorting
		var i=0;
		var j=0;
		while(i<sortedDataSetPt1.length || j<sortedDataSetPt2.length) {
			if(i>sortedDataSetPt1.length) {
				sortedDataSet.push(sortedDataSetPt2[j]);
				j++;
			}else if(j>sortedDataSetPt2.length) {
				sortedDataSet.push(sortedDataSetPt1[i]);
				i++;
			}else if(sortedDataSetPt1[i] > sortedDataSetPt2[j]) {
				sortedDataSet.push(sortedDataSetPt2[j]);
				j++;
			}else {
				sortedDataSet.push(sortedDataSetPt1[i]);
				i++;
			}
			console.log(sortedDataSet);
		}
	} else {
		sortedDataSet.push(dataSet[0]);
	}
	
	console.log("Sorted Data Set: ", sortedDataSet);
	return sortedDataSet;
}	

function sleep(milliseconds) {
	  const date = Date.now();
	  let currentDate = null;
	  do {
		  currentDate = Date.now();
	  } while (currentDate - date < milliseconds);
}
