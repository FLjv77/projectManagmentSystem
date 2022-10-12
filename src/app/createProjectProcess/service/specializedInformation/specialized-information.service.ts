import { HealthSpeceficDetailDTO } from './../../model/specializedInformation/modifyGetHealthSpeceficDetail';
import { RevivalIndustrySpeceficDetailDTO } from './../../model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { SocialTransformationSpeceficDetailDTO } from './../../model/specializedInformation/modifySocialTransformationSpeceficDetail';
import { KnowledgeBasedSpeceficDetailDTO } from './../../model/specializedInformation/modifyKnowledgeBasedSpeceficDetail';
import { url } from 'src/assets/url/url';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { WaterShedAndCanalsSpeceficDetailBehaviorDTO } from './../../model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RuralRoadSpeceficDetailDTO } from '../../model/specializedInformation/modifyRuralRoadSpeceficDetail';

@Injectable({
  providedIn: 'root'
})
export class SpecializedInformationService {

  constructor(private http: HttpClient) { }

  public ModifyWaterShedAndCanalsSpeceficDetail(projectId : string, waterShedAndCanalsSpeceficDetailBehaviorDTO: WaterShedAndCanalsSpeceficDetailBehaviorDTO): Observable<ApiResult<WaterShedAndCanalsSpeceficDetailBehaviorDTO>>{
    return this.http.post<ApiResult<WaterShedAndCanalsSpeceficDetailBehaviorDTO>>(url.ModifyWaterShedAndCanalsSpeceficDetail + projectId , waterShedAndCanalsSpeceficDetailBehaviorDTO);
  }

  public ModifyRuralRoadSpeceficDetail(projectId : string|null, ruralRoadSpeceficDetailDTO: RuralRoadSpeceficDetailDTO): Observable<ApiResult<RuralRoadSpeceficDetailDTO>>{
    return this.http.post<ApiResult<RuralRoadSpeceficDetailDTO>>(url.ModifyRuralRoadSpeceficDetail + projectId , ruralRoadSpeceficDetailDTO);
  }

  public ModifyKnowledgeBasedSpeceficDetail(projectId : string|null, knowledgeBasedSpeceficDetailDTO: KnowledgeBasedSpeceficDetailDTO): Observable<ApiResult<KnowledgeBasedSpeceficDetailDTO>>{
    return this.http.put<ApiResult<KnowledgeBasedSpeceficDetailDTO>>(url.ModifyKnowledgeBasedSpeceficDetail + projectId , knowledgeBasedSpeceficDetailDTO);
  }

  public ModifySocialTransformationSpeceficDetail(projectId : string|null, socialTransformationSpeceficDetailDTO: SocialTransformationSpeceficDetailDTO): Observable<ApiResult<SocialTransformationSpeceficDetailDTO>>{
    return this.http.put<ApiResult<SocialTransformationSpeceficDetailDTO>>(url.ModifySocialTransformationSpeceficDetail + projectId , socialTransformationSpeceficDetailDTO);
  }

  public ModifyRevivalIndustrySpeceficDetail(projectId : string|null, revivalIndustrySpeceficDetailDTO: RevivalIndustrySpeceficDetailDTO): Observable<ApiResult<RevivalIndustrySpeceficDetailDTO>>{
    return this.http.put<ApiResult<RevivalIndustrySpeceficDetailDTO>>(url.ModifyRevivalIndustrySpeceficDetail + projectId , revivalIndustrySpeceficDetailDTO);
  }

  public ModifyGetHealthSpeceficDetail(projectId : string|null, healthSpeceficDetailDTO: HealthSpeceficDetailDTO): Observable<ApiResult<HealthSpeceficDetailDTO>>{
    return this.http.put<ApiResult<HealthSpeceficDetailDTO>>(url.ModifyGetHealthSpeceficDetail + projectId , healthSpeceficDetailDTO);
  }
}
