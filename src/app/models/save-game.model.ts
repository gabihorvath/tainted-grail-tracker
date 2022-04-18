import { Campaign } from "./campaign.model";

export class SaveGame
{
    private _campaigns: Campaign[] = [];
    
    public set campaigns(campaigns: Campaign[])
    {
        this._campaigns = campaigns;
    }

    public get campaigns(): Campaign[]
    {
        return this._campaigns;
    }

    public addCampaign(campaign: Campaign)
    {
        this._campaigns.push(campaign);
    }

    public removeCampaign(campaign: Campaign)
    {
        this._campaigns = this._campaigns.filter(item => item !== campaign);
    }
}
