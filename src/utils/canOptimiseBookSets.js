import getOptimizationPossibilityCount from "./getOptimizationPossibilityCount";

export default function canOptimiseBookSets(bookSetAndCountMap) {
	const OptimizationPossibilityCount =
		getOptimizationPossibilityCount(bookSetAndCountMap);
	return OptimizationPossibilityCount > 0 ? true : false;
}
