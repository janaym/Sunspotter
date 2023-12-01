export default function sortSpots(flaggedSpots, setFlaggedSpots, sortKey) {
  console.log("in sortspots " ,flaggedSpots)
  let sortedSpots = [...flaggedSpots];
  sortedSpots = sortedSpots.sort((spotA, spotB) => spotB.spot[sortKey] - spotA.spot[sortKey]);
  setFlaggedSpots(sortedSpots);
}