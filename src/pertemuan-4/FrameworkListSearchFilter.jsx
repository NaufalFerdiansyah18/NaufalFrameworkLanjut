import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
    const [searchTerm, setSearchTerm] = useState("");
		const [selectedTag, setSelectedTag] = useState("");

    const _searchTerm = searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name
				.toLowerCase()
				.includes(_searchTerm) ||
      framework.description
				.toLowerCase()
				.includes(_searchTerm) ||
      framework.details.developer
				.toLowerCase()
				.includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  const allTags = [
    ...new Set(frameworkData.flatMap((framework) => framework.tags)),
  ];

    return (
        <div className="p-8">

            <input
                type="text"
                name="searchTerm"
                placeholder="Search framework..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select
                name="selectedTag"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                onChange={(e) => setSearchTag(e.target.value)}   
                >
                <option value="">All Tags</option>
                    {allTags.map((tag, index) => (
                        <option key={index} value={tag}>
                        {tag}
                        </option>
                        
  ))}
                </select>

            {filteredFrameworks.map((item) => (
		            <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
		                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
		                <p className="text-gray-600">{item.description}</p>
                        
		                <p className="text-red-600">{item.details.developer}</p>

                        <a href={item.details.officialWebsite} target="_blank" 
                        className="text-blue-300 underline">
                            {item.details.officialWebsite}
                        </a>
                        <br></br>
                        {item.tags.map((tag, index) => (
  <span
    key={index}
    className="inline-block 
               bg-blue-50 text-blue-600 
               border border-blue-200
               px-3 py-1 text-xs font-medium 
               rounded-full mr-2 mb-2
               transition duration-200 ease-in-out
               hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm"
  >
    {tag}
  </span>
))}
                        
		            </div>
            ))}
        </div>
    )
}

