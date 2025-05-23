"use client";

import React from "react";
import { Size } from "@components/Constants";
import { Button, Input, Tooltip, Typography } from "@components";
import { TypographyType } from "@components/typography/Constant";
import { Controller, useForm } from "react-hook-form";
import CurrencyFormat from "react-currency-format";
import { scrollToInput } from "@utils";

// type SellerInfoType = {
//   seller: string;
//   sellerNumber: number;
// }

export default function SellerInfo() {
  const { control } = useForm({
    defaultValues: {
      // registTax: "",
    },
  });


  const inputFields = [
    {
      id: "sellerName",
      label: "매도인명(법인명)",
      placeholder: "매도인명 입력",
      // maxLength:
    },
    {
      id: "sellerNumber",
      label: "매도인 생년월일(법인등록번호)",
      placeholder: "생년월일 또는 법인등록번호 6자리 입력"
    }
  ]

  return (
    <>
      {/* TODO: 로딩 추가 */}
      <div className="flex flex-col justify-between grow w-full h-full">
        <div>
          <Typography
            type={Typography.TypographyType.H1}
            color="text-kos-gray-800"
            className="pb-3"
          >
            매도인 정보를 입력하고<br/>
            해당하는 서류를 제출해 주세요
          </Typography>

          <ul>
            {...inputFields.map((field, index) => {
              const { id, label } = field;

              return (
                <li key={id}>
                  <Input.InputContainer>
                    <Input.Label htmlFor={id}>
                      {label}
                    </Input.Label>
                    <Controller
                      control={control}
                      name={id}
                      render={({ field: { onBlur } }) => (
                        <Input.InputField
                          id={id}
                          // placeholder={
                          //   showError && clientForm[field.key] === ""
                          //     ? "금액을 입력해주세요"
                          //     : field.placeholder
                          // }
                          // value={clientForm[field.key] ?? ""}
                          // styleType={
                          //   showError && clientForm[field.key] === ""
                          //     ? "error"
                          //     : undefined
                          // }
                          maxLength={39}
                          onBlur={onBlur}
                          // onChange={(e) =>
                          //   handleChangeValue(field.key, e.target.value)
                          // }
                          onFocus={scrollToInput}
                        />
                      )}
                    />
                  </Input.InputContainer>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
