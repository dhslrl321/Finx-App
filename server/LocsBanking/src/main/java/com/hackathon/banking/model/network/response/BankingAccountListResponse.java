package com.hackathon.banking.model.network.response;

import com.hackathon.banking.model.dto.AccountDto;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class BankingAccountListResponse {
    List<AccountDto> res_list;
    private String rsp_code;
}
