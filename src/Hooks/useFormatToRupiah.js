import { useMemo } from "react";

const useFormatToRupiah = (number) => {
    const formatValue = useMemo(() => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);
    }, [number]);
    return formatValue;

}

export default useFormatToRupiah;