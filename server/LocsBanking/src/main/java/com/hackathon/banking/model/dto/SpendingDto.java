package com.hackathon.banking.model.dto;

import com.hackathon.banking.model.entity.Spending;
import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class SpendingDto {
    private Integer id;
    private String title;
    private Integer amount;
    private String payment_day;

    public Spending toEntity() {
        return Spending.builder()
                .title(title)
                .amount(amount)
                .payment_day(payment_day)
                .build();
    }
}
