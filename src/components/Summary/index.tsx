import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Deposits</span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>$ 17,442.53</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Withdrawals</span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>$ 2,462.62</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color="#fff" />
                </header>
                <strong>$ 405,050.72</strong>
            </SummaryCard>


        </SummaryContainer>
    )
}