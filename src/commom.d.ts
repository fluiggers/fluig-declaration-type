declare namespace com.totvs.technology.foundation.sdk.service.vo.common {
    declare class OrderParam {}

    declare class ResponseEnvelopeVO<T> {
        getItems(): java.util.ArrayList<T>;
        setItems(items: java.util.ArrayList<T>);
        isHasNext(): boolean;
        setHasNext(hasNext: boolean);
        getTotal(): number;
        setTotal(total: number);
    }
}
