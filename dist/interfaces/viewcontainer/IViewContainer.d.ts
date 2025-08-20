import { $$txt } from '../../datatypes';
import { EN_VIEW_TYPE } from '../../enums';
export interface IViewContainer {
    sid: $$txt;
    view_type: EN_VIEW_TYPE;
    definition_id: $$txt;
    data_model_id: $$txt;
}
