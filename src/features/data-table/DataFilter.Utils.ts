import { sortingFns, type FilterFn, type Row } from '@tanstack/react-table';
import { type RankingInfo, rankItem, compareItems } from '@tanstack/match-sorter-utils';
declare module '@tanstack/react-table' {
  //add fuzzy filter to the filterFns
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}
type FuzzyMeta = {
  itemRank: ReturnType<typeof rankItem>;
};

export const fuzzyFilter = <TData>(
  row: Row<TData>,
  columnId: string,
  value: unknown,
  addMeta: (meta: { itemRank: ReturnType<typeof rankItem> }) => void,
): boolean => {
  const itemRank = rankItem(String(row.getValue(columnId)), String(value));
  addMeta({
    itemRank,
  });

  return itemRank.passed;
};

// Define a custom fuzzy sort function that will sort by rank if the row has ranking information
export const fuzzySort = <TData>(rowA: Row<TData>, rowB: Row<TData>, columnId: string): number => {
  let dir = 0;

  const metaA = rowA.columnFiltersMeta[columnId] as FuzzyMeta | undefined;

  const metaB = rowB.columnFiltersMeta[columnId] as FuzzyMeta | undefined;

  if (metaA && metaB) {
    dir = compareItems(metaA.itemRank, metaB.itemRank);
  }

  return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
};
