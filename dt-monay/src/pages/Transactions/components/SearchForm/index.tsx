import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react"

export function SearchForm() {
  return(
    <SearchFormContainer>
      <input type="text" placeholder="Busque uma transações" />

      <button type="button">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}