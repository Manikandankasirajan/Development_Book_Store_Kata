export default function getOptimizationPossibilityCount(bookSetAndCountMap) {
	return Math.min(...Object.values(bookSetAndCountMap));
}
