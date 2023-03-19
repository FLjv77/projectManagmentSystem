import { HealthSpeceficDetailDTO } from './../../model/specializedInformation/modifyGetHealthSpeceficDetail';
import { RevivalIndustrySpeceficDetailDTO } from './../../model/specializedInformation/modifyRevivalIndustrySpeceficDetail';
import { SocialTransformationSpeceficDetailDTO } from './../../model/specializedInformation/modifySocialTransformationSpeceficDetail';
import { KnowledgeBasedSpeceficDetailDTO } from './../../model/specializedInformation/modifyKnowledgeBasedSpeceficDetail';
import { url } from 'src/assets/url/url';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/auth/model/authDTO';
import { WaterShedAndCanalsSpeceficDetailBehaviorDTO } from './../../model/specializedInformation/modifyWaterShedAndCanalsSpeceficDetail';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { RuralRoadSpeceficDetailDTO } from '../../model/specializedInformation/modifyRuralRoadSpeceficDetail';

@Injectable({
  providedIn: 'root'
})
export class SpecializedInformationService {

  constructor(private http: HttpClient) { }

  public wellBoolean = new EventEmitter<boolean>();


  public ModifyWaterShedAndCanalsSpeceficDetail(projectId : string|null, waterShedAndCanalsSpeceficDetailBehaviorDTO: WaterShedAndCanalsSpeceficDetailBehaviorDTO): Observable<ApiResult<WaterShedAndCanalsSpeceficDetailBehaviorDTO>>{
    return this.http.put<ApiResult<WaterShedAndCanalsSpeceficDetailBehaviorDTO>>(url.ModifyWaterShedAndCanalsSpeceficDetail + projectId , waterShedAndCanalsSpeceficDetailBehaviorDTO);
  }

  public ModifyWaterShedAndCanalsSpeceficDetail1(projectId : string|string[], waterShedAndCanalsSpeceficDetailBehaviorDTO: WaterShedAndCanalsSpeceficDetailBehaviorDTO): Observable<ApiResult<WaterShedAndCanalsSpeceficDetailBehaviorDTO>>{
    return this.http.put<ApiResult<WaterShedAndCanalsSpeceficDetailBehaviorDTO>>(url.ModifyWaterShedAndCanalsSpeceficDetail + projectId , waterShedAndCanalsSpeceficDetailBehaviorDTO);
  }

  public ModifyRuralRoadSpeceficDetail(projectId : string|null, ruralRoadSpeceficDetailDTO: RuralRoadSpeceficDetailDTO): Observable<ApiResult<RuralRoadSpeceficDetailDTO>>{
    return this.http.put<ApiResult<RuralRoadSpeceficDetailDTO>>(url.ModifyRuralRoadSpeceficDetail + projectId , ruralRoadSpeceficDetailDTO);
  }

  public ModifyRuralRoadSpeceficDetail1(projectId : string|string[], ruralRoadSpeceficDetailDTO: RuralRoadSpeceficDetailDTO): Observable<ApiResult<RuralRoadSpeceficDetailDTO>>{
    return this.http.put<ApiResult<RuralRoadSpeceficDetailDTO>>(url.ModifyRuralRoadSpeceficDetail + projectId , ruralRoadSpeceficDetailDTO);
  }

  public ModifyKnowledgeBasedSpeceficDetail(projectId : string|null, knowledgeBasedSpeceficDetailDTO: KnowledgeBasedSpeceficDetailDTO): Observable<ApiResult<KnowledgeBasedSpeceficDetailDTO>>{
    return this.http.put<ApiResult<KnowledgeBasedSpeceficDetailDTO>>(url.ModifyKnowledgeBasedSpeceficDetail + projectId , knowledgeBasedSpeceficDetailDTO);
  }

  public ModifyKnowledgeBasedSpeceficDetail1(projectId : string|string[], knowledgeBasedSpeceficDetailDTO: KnowledgeBasedSpeceficDetailDTO): Observable<ApiResult<KnowledgeBasedSpeceficDetailDTO>>{
    return this.http.put<ApiResult<KnowledgeBasedSpeceficDetailDTO>>(url.ModifyKnowledgeBasedSpeceficDetail + projectId , knowledgeBasedSpeceficDetailDTO);
  }

  public ModifySocialTransformationSpeceficDetail(projectId : string|null, socialTransformationSpeceficDetailDTO: SocialTransformationSpeceficDetailDTO): Observable<ApiResult<SocialTransformationSpeceficDetailDTO>>{
    return this.http.put<ApiResult<SocialTransformationSpeceficDetailDTO>>(url.ModifySocialTransformationSpeceficDetail + projectId , socialTransformationSpeceficDetailDTO);
  }

  public ModifySocialTransformationSpeceficDetail1(projectId : string|string[], socialTransformationSpeceficDetailDTO: SocialTransformationSpeceficDetailDTO): Observable<ApiResult<SocialTransformationSpeceficDetailDTO>>{
    return this.http.put<ApiResult<SocialTransformationSpeceficDetailDTO>>(url.ModifySocialTransformationSpeceficDetail + projectId , socialTransformationSpeceficDetailDTO);
  }

  public ModifyRevivalIndustrySpeceficDetail(projectId : string|null, revivalIndustrySpeceficDetailDTO: RevivalIndustrySpeceficDetailDTO): Observable<ApiResult<RevivalIndustrySpeceficDetailDTO>>{
    return this.http.put<ApiResult<RevivalIndustrySpeceficDetailDTO>>(url.ModifyRevivalIndustrySpeceficDetail + projectId , revivalIndustrySpeceficDetailDTO);
  }

  public ModifyRevivalIndustrySpeceficDetail1(projectId : string|string[], revivalIndustrySpeceficDetailDTO: RevivalIndustrySpeceficDetailDTO): Observable<ApiResult<RevivalIndustrySpeceficDetailDTO>>{
    return this.http.put<ApiResult<RevivalIndustrySpeceficDetailDTO>>(url.ModifyRevivalIndustrySpeceficDetail + projectId , revivalIndustrySpeceficDetailDTO);
  }

  public ModifyGetHealthSpeceficDetail(projectId : string|null, healthSpeceficDetailDTO: HealthSpeceficDetailDTO): Observable<ApiResult<HealthSpeceficDetailDTO>>{
    return this.http.put<ApiResult<HealthSpeceficDetailDTO>>(url.ModifyGetHealthSpeceficDetail + projectId , healthSpeceficDetailDTO);
  }

  public ModifyGetHealthSpeceficDetail1(projectId : string|string[], healthSpeceficDetailDTO: HealthSpeceficDetailDTO): Observable<ApiResult<HealthSpeceficDetailDTO>>{
    return this.http.put<ApiResult<HealthSpeceficDetailDTO>>(url.ModifyGetHealthSpeceficDetail + projectId , healthSpeceficDetailDTO);
  }
}
