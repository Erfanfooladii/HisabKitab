import Item_specifications from "../../../components/itmes/list_item_specifications/page";
import { toPersianNumber } from "../../../utilities/numberConvert";

const List_item_specifications = ({ data }) => {
  return (
    <div className="flex gap-2 flex-col">
      <Item_specifications name={data.name} title="نام دستگاه" />
      <Item_specifications
        name={toPersianNumber(data.diameter_size)}
        title="قطر هسته"
      />
      <Item_specifications
        name={toPersianNumber(data.length_size)}
        title="طول هسته"
      />
      <Item_specifications
        name={toPersianNumber(data.number_laps_main)}
        title="تعداد دور سیم پیج اصلی"
      />
      {data.three_phases ? (
        <Item_specifications
          name={toPersianNumber(data.number_laps_start)}
          title="تعداد دور سیم پیج راه انداز"
        />
      ) : null}
      <Item_specifications
        name={toPersianNumber(data.coil_group_main)}
        title="تعداد گروه سیم پیچ اصلی"
      />
      {data.three_phases ? (
        <Item_specifications
          name={toPersianNumber(data.coil_group_start)}
          title="تعداد گروه سیم پیچ راه انداز"
        />
      ) : null}
      <Item_specifications
        name={toPersianNumber(data.number_grooves)}
        title="تعداد شیار هسته"
      />
      <Item_specifications
        name={toPersianNumber(data.horse_power)}
        title="(hp) قدرت بر حسب اسب بخار"
      />
      <Item_specifications
        name={toPersianNumber(data.cross_section_main)}
        title="سطح مقطع سیم (سیم پیچ اصلی)"
      />
      {data.three_phases ? (
        <Item_specifications
          name={toPersianNumber(data.cross_section_start)}
          title="سطح مقطع سیم (سیم پیچ راه انداز)"
        />
      ) : null}
      <Item_specifications
        name={toPersianNumber(data.headـtype)}
        title="نوع سربندی"
      />
      <Item_specifications name={data.three_phases} phases={true} />
    </div>
  );
};

export default List_item_specifications;
