import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContext } from "../../context/TransactionsContext";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transactions {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr>
                <td width="50%">{transaction.description}</td>
                <td><PriceHighlight variant={transaction.type}>{transaction.price}</PriceHighlight></td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
              )
            })}

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
};