// in my database some user name is duplicate shoe remove
// Function to remove duplicates
//https://www.youtube.com/watch?v=MWmMvudBgFU
async function removeDuplicates() {
  const duplicates = await User.aggregate([
    {
      $group: {
        _id: "$name",
        uniqueIds: { $addToSet: "$_id" },
        count: { $sum: 1 },
      },
    },
    {
      $match: {
        count: { $gt: 1 },
      },
    },
  ]);

  for (const doc of duplicates) {
    const uniqueIds = doc.uniqueIds;
    const firstId = uniqueIds[0]; // Keep the first ID
    const duplicateIds = uniqueIds.slice(1); // Get the rest of the IDs (duplicates)

    // Delete all documents with IDs in duplicateIds
    await User.deleteMany({ _id: { $in: duplicateIds } });
  }

  console.log("Duplicates removed");
}

removeDuplicates().catch((err) => {
  console.log(err);
});
