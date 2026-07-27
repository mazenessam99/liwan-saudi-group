import { useMemo, useState } from "react";

export function useListFilters(items: any[], options: any) {
    const { getName, getCity, sortFns, defaultSort } = options;
    const [search, setSearch] = useState("");
    const [selectedCity, setSelectedCity] = useState("all");
    const [sortBy, setSortBy] = useState(defaultSort || "");
    
    const cities = useMemo(() => {
        return [...new Set(items.map(getCity))] as string[];
    }, [items]);

    const filtered = useMemo(() => {
        let result = items.filter((item: any) => {
            const searchMatch = getName(item).includes(search);
            const cityMatch = selectedCity === "all" || getCity(item) === selectedCity;
            return searchMatch && cityMatch;
        });
        if (sortFns && sortFns[sortBy]) {
            result = [...result].sort(sortFns[sortBy]);
        }

        return result;
    }, [items, search, selectedCity, sortBy]);

    const clearFilters = () => {
        setSearch("");
        setSelectedCity("all");
        if (defaultSort) setSortBy(defaultSort);
    };

    return {
        search,
        setSearch,
        selectedCity,
        setSelectedCity,
        cities,
        sortBy,
        setSortBy,
        filtered,
        clearFilters,
    };
}