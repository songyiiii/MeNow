import { ReactNode } from 'react';

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>임시 서치바</div>
      {children}
    </div>
  );
};
export default SearchLayout;
